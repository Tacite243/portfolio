from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    skills = models.TextField()
    experience = models.TextField()
    contact = models.EmailField()
