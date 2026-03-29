import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { doc, setDoc,updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone:false,
})
export class ProfileComponent {

  profile = {
    name: '',
    bio: '',
    imageUrl: '',
     username: ''   
  };

  selectedImage!: File;
  showToast = false; 

  constructor(private fb: FirebaseService) {}

  // onImageSelected(event: any) {
  //   this.selectedImage = event.target.files[0];
  // }

 async uploadImageAndSaveProfile() {
  console.log('FORM SUBMITTED');

  const uid = this.fb.getUserId();
  if (!uid) {
    console.error('NO UID');
    return;
  }

  let imageUrl = '';

  try {
    if (this.selectedImage) {
      console.log('Uploading image...');

      // تحويل الصورة لـ base64
      const base64 = await this.convertToBase64(this.selectedImage);

      // رفع على ImgBB
      const formData = new FormData();
      if (base64) {
  formData.append('image', base64.toString().split(',')[1]);
}

      const response = await fetch(
        'https://api.imgbb.com/1/upload?key=14b924b77e88841d3869d9bdd718487e',
        { method: 'POST', body: formData }
      );

      const data = await response.json();
      imageUrl = data.data.url;
      console.log('Image URL:', imageUrl);
    }
  } catch (error) {
    console.error('IMAGE UPLOAD ERROR ❌', error);
    alert('Image upload failed');
    return;
  }

  try {
    await this.fb.saveUserData(uid, {
      profile: {
        name: this.profile.name,
        bio: this.profile.bio,
        username: this.profile.username,
        imageUrl: imageUrl
      }
    });

    this.showToast = true;
      setTimeout(() => this.showToast = false, 3000);
  } catch (error) {
    console.error('SAVE PROFILE ERROR ❌', error);
  }
}

// دالة تحويل الصورة لـ base64
convertToBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
onImageSelected(event: any) {
  this.selectedImage = event.target.files[0];
  const fileName = document.getElementById('fileName');
  if (fileName) fileName.textContent = this.selectedImage?.name || 'No file chosen';
}
}

