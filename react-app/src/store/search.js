export const search = (searchStr) => async (dispatch) => {
    // can eventually add to array for other search key: value pairs
    const resources = ["restaurant"];

    let searchArr = [];
    for (let key of resources) {
        searchArr.push(`${key}=${searchStr}`);
    }

    const searchQuery = searchArr.join("&");
    const res = await fetch(`/api/search?${searchQuery}`);

    if (res.ok) {
        const results = await res.json();
        return results;
    } else {
        return {"errors": [{"field": "server", "message": "An error occurred. Please try again."}]}
    }
}
