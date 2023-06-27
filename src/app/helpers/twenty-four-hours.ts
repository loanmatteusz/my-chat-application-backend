export const twentyFourHours = () => {
    const now = new Date();
    const oneDay = new Date().setDate(now.getDate() + 1);
    return new Date(oneDay);
}
