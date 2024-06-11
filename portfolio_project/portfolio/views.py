from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerialiszer

class ProfileView(APIView):
    def get(self, request):
        profile = Profile.objects.first()
        serializer = ProfileSerialiszer(profile)
        return Response(serializer.data)
