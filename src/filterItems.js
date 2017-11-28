export default function filterItems(data, searchText, maxResults) {

    return data.filter((item) =>
    {
        return item.name.toUpperCase().includes(searchText.toUpperCase());
    }).slice(0, maxResults);
}