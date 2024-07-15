
export const parseWithBigInt = (data: object) => {
    return JSON.parse(JSON.stringify(data, (key, value) =>
        typeof value === 'bigint'
            ? parseInt(value.toString())
            : value
    ))
}