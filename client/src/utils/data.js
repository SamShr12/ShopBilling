export const itemdetailquery = (id) => {
    const query = `/posts/${id} {
        id,
        name,
        priceperbox,
        priceperpacket,
        priceperdozen
    }`;
    return query
}