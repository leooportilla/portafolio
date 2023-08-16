export const maps = () => {
    let div = L.map('maps').setView([10.01885,-69.24233], 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(div);

    L.marker([10.01885,-69.24233]).addTo(div).bindPopup('Mi Ubicacion').openPopup()
}