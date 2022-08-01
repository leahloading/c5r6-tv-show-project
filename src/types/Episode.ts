interface Episode {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    rating: {
        average: number
    },
    image: {
        medium: string,
        original: string
    },
    summary: string,
    _links: {
        self: {
            href: string
        }
    }
}


export default Episode