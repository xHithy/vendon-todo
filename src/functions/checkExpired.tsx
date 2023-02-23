export const CheckExpired = (deadline:string) => {
    const difference = (new Date().getTime() - new Date(deadline).getTime()) / 60000;

    // True if expired, false if valid
    return difference > 0;
}