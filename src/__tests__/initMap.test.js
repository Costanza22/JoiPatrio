
//testando a api do google maps

global.google = {
    maps: {
        Map: jest.fn().mockImplementation(() => {
            return {
                setCenter: jest.fn(),
                setZoom: jest.fn(),
            };
        }),
        Marker: jest.fn().mockImplementation(function () { 
            this.addListener = jest.fn();
        }),
        InfoWindow: jest.fn().mockImplementation(function () { 
            this.open = jest.fn();
        }),
    },
};

function initMap() {
    const cidadelaLocation = { lat: -26.301953, lng: -48.851537 };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: cidadelaLocation,
    });

    const marker = new google.maps.Marker({
        position: cidadelaLocation,
        map: map,
        title: 'Cidadela Cultural Antártica',
    });

    const contentString = `
        <div>
            <h2>Cidadela Cultural Antártica</h2>
            <img src="https://static.ndmais.com.br/2021/03/cidadela-cultural-antarctica.jpg" alt="Cidadela Cultural Antártica">
            <p>R. XV de Novembro, 1383 - América, Joinville - SC</p>
        </div>`;

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}

// Testes unitários
describe('initMap', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="map"></div>';
    });

    test('deve inicializar o mapa corretamente', () => {
        initMap();

        expect(google.maps.Map).toHaveBeenCalled();
        expect(google.maps.Map).toHaveBeenCalledWith(expect.any(HTMLElement), {
            zoom: 16,
            center: { lat: -26.301953, lng: -48.851537 },
        });
    });

    test('deve adicionar um marcador ao mapa', () => {
        initMap();

        expect(google.maps.Marker).toHaveBeenCalled();
        expect(google.maps.Marker).toHaveBeenCalledWith(expect.objectContaining({
            position: { lat: -26.301953, lng: -48.851537 },
            title: 'Cidadela Cultural Antártica',
        }));
    });

    test('deve adicionar um listener ao marcador', () => {
        initMap();
    
        const marker = google.maps.Marker.mock.instances[0];
        expect(marker.addListener).toHaveBeenCalledWith('click', expect.any(Function));
    });
    
    test('deve abrir a InfoWindow ao clicar no marcador', () => {
        initMap();
    
        const marker = google.maps.Marker.mock.instances[0];
        const infowindow = google.maps.InfoWindow.mock.instances[0];
    
        const clickListener = marker.addListener.mock.calls[0][1];
        clickListener(); // Simula o clique
        expect(infowindow.open).toHaveBeenCalled();
        expect(infowindow.open).toHaveBeenCalledWith(expect.any(Object), marker);
    });
    
});
