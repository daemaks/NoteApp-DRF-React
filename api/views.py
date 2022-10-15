from rest_framework.decorators import api_view

from .services import (
    create_note_logic,
    delete_note_logic,
    get_note_logic,
    get_notes_list_logic,
    update_note_logic,
)


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
