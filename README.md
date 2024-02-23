# React + Vite

Create an application that allows tagging of an image.
✅ Tags should be selected from drop-down.
✅ Place it anywhere on the screen.
✅ Tags assigned to an image should be displayed below image. Assigning or removing tag should reflect on the screen without the user manually refreshing the page.
✅ Assume existence of the following api endpoints.
✅ Included are example json responses where appropriate.

✅ 1. List of tags
a. GET /tag
b. [{"id":1,"label":"Abstract"},{"id":2,"label":"Typography"},{"id":3,"label":"Graffiti"},{"id
":5,"label":"Realism"}]

✅ 2. Get image
a. GET /image
b. { "tags": [{"id": 5, "label": "Realism"}, { "id": 1, "label": "Abstract"} ], "createdAt":
1568044681586, "updatedAt": 1568044681586, "id": 6788, "title": "mural4",
"imageUrl": "https://signned.url.com", "thumbnailUrl": "https://signned.url.com"}
✅ 3. Tag image
a. PATCH /mural/:id/tag/:tagId

✅  4. Untag image
a. DELETE /mural/:id/tag/:tagId
