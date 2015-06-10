# -*- coding: utf-8 -*-

__author__ = 'kkorth'

from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world!")