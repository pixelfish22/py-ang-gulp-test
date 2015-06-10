from django.db import models

class Creature(models.Model):
    creature_name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)

