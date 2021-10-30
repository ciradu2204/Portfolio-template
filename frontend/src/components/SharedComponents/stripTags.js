//from https://developer.wordpress.org/reference/functions/wp_strip_all_tags/

export function wp_strip_all_tags(content) {
    let result = content.replace( /(<([^>]+)>)/ig, '')

    if(result.includes("&#8211;")){
        result = result.replace('&#8211;', '' )
    }
    return result.trim();
}