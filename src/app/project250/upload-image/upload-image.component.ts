import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  private apiServerUrl =environment.apiBaseUrl;

  selectedFile:File;
  retrievedImage:any;
  base64Data:any;
  retrieveResponse:any;
  message:string;
  imageName:any;

  public onFileChanged(event){
    //select file
    this.selectedFile =event.target.files[0];
  }

  onUpload(){
    console.log(this.selectedFile);

    //FormDate API provides
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile',this.selectedFile,this.selectedFile.name)
    this.httpClient.post(`${this.apiServerUrl}Kvisafast/image/upload`,uploadImageData,{ observe:'response'})
      .subscribe((response)=>{
        if(response.status === 200){
          this.message ='Imageuploaded successfully';
        }else{
          this.message ='Image not uploaded successfully'
        }
      })
    }

    getImage(){
    this.httpClient.get(`${this.apiServerUrl}Kvisafast/image/get/`+this.imageName)
      .subscribe(
        res =>{
          this.retrieveResponse.picByte;
          this.retrievedImage ='data:image/jpeg;base64Data,'+this.base64Data;
        }
      );
    }



  ngOnInit(): void {
  }

}
