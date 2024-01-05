import localFont from "next/font/local";

// export const montserrat = Roboto({
//     weight: ["100", '300', '400', '500', '700'],
//     subsets: ['cyrillic']
// })

export const SF = localFont({
    src: [
        {
            path: './SFProDisplay-Regular.woff2',
            weight: '400'
        },
        {
            path: './SFProDisplay-Light.woff2',
            weight: '300'
        },
        {
            path: './SFProDisplay-Thin.woff2',
            weight: '100'
        },
        {
            path: './SFProDisplay-Semibold.woff2',
            weight: '600'
        },
        {
            path: './SFProDisplay-Medium.woff2',
            weight: '500'
        },
    ]
})