import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function BlogEditor() {
    const [blogData,setBlogData] = useState('');

    const handleChange = (e,editor)=>{
        setBlogData(editor.getData());
    }
    
    console.log(blogData);

    const API_URL = "https://example.com"
    const UPLOAD_ENDPOINT = "api/blogs/uploadImg"

    function uploadAdapter(loader) {
        return {
            upload : () => {
                return new Promise((resolve , reject) => {
                    const body = new FormData();
                    loader.file.then((file)=>{
                        body.append("uploadImg" , file);
                        fetch(`${API_URL}/${UPLOAD_ENDPOINT}` , {
                            method : "post",
                            body : body
                        })
                        .then((res => res.json()))
                        .then((res) => {
                            resolve({ default : `${API_URL}/${res.url}` })
                        })
                        .catch((err) => {
                            reject(err);
                        })
                    })
                })
            }
        }
    }

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        }
    }

    return ( 
        <>

        <CKEditor
          editor={ClassicEditor}
          onChange={(e,editor)=>{handleChange(e,editor)}}
          config={{
              extraPlugins: [uploadPlugin],
              language: 'en' // fa , en and etc.
          }}
        />

        <button className="send-blog">Send</button>

        </>
     );
}

export default BlogEditor;