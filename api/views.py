from rest_framework.decorators import api_view

from .services import (
    create_note_logic,
    delete_note_logic,
    get_note_logic,
    get_notes_list_logic,
    update_note_logic,
)


@api_view(["GET"])
def get_routes(request):
    pass
    # routes = [
    #     {
    #         "Endpoint": "/notes/",
    #         "method": "GET",
    #         "body": None,
    #         "description": "Returns an array of notes",
    #     },
    #     {
    #         "Endpoint": "/notes/id",
    #         "method": "GET",
    #         "body": None,
    #         "description": "Returns a single note object",
    #     },
    #     {
    #         "Endpoint": "/notes/create/",
    #         "method": "POST",
    #         "body": {"body": ""},
    #         "description": "Creates new note with data sent in post request",
    #     },
    #     {
    #         "Endpoint": "/notes/id/update/",
    #         "method": "PUT",
    #         "body": {"body": ""},
    #         "description": "Creates an existing note with data sent in post request",
    #     },
    #     {
    #         "Endpoint": "/notes/id/delete/",
    #         "method": "DELETE",
    #         "body": None,
    #         "description": "Deletes and exiting note",
    #     },
    # ]
    # return Response(routes)


@api_view(["GET", "POST"])
def get_notes(request):
    if request.method == "GET":
        return get_notes_list_logic(request)

    if request.method == "POST":
        return create_note_logic(request)


@api_view(["GET", "PUT", "DELETE"])
def get_note(request, pk):

    if request.method == "GET":
        return get_note_logic(request, pk)

    if request.method == "PUT":
        return update_note_logic(request, pk)

    if request.method == "DELETE":
        return delete_note_logic(request, pk)
