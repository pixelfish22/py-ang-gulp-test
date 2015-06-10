from django.test import TestCase
from .models import Creature


# Create your tests here.
class CreatureTests(TestCase):

    def testcreature_has_location(self):
        critter = Creature(location="Japan")
        self.assertEqual(critter.location, "Japan")
