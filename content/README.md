# Content Folder

Folder for downloaded or generated content

## Content Struct

``
content = {
    maximumSentences,
    searchTerm,
    prefix,
    sourceContentOriginal,
    sourceContentSanitized,
    sentences[{
        text,
        keywords[],
        images[],
        googleSearchQuery
    }],
    downloadedImages[]
}
``