export default function page({params}) {
    // throw new Error("Error finding the page")
    
    // fetch blog post from its slug ex: python , js 
    let languages = ["javascript", "java", "python", "cpp", "c"]
    // endpoints

    if(languages.includes(params.slug)) {
        return <div>{params.slug}</div>
    }
    else {
        return <div>post not found</div>
    }
    // can also redirect the page based on slugs using middleware

    // return(
    //     <div>
    //         My post: {params.slug}
    //     </div>
    // )
}