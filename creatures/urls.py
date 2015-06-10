from django.conf.urls import url

from . import views

__author__ = 'kkorth'

urlpatterns = [
    url(r'^$', views.index, name='index')
]