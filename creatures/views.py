from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
from .models import Creature

# Create your views here.

def index(request):
    creatures = Creature.objects.order_by('creature_name')
    template = loader.get_template('creatures/index.html')
    context = RequestContext(request, {
        'creatures':creatures
    })
    return HttpResponse(template.render(context))
