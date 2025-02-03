export const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
    }
}