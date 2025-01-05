import {IKContext,IKUpload} from 'imagekitio-react'
import { publicKey, urlEndpoint } from '../../constants/environment'
import { authenticator } from '../../lib/imagekit';
import {toast} from 'react-toastify'
import { useRef } from 'react';



const UploadButton = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);
  const handleSuccess = (res) => {
    console.log(res);
    setData(res);
    toast.success("File uploaded Successfully");
  };
  const handleError = (err) => {
    console.log(err);
    toast.error("Image upload failed!");
  };
  const handleUploadProgress = (progress) => {
    console.log(progress);
    setProgress(Math.round(progress.loaded / progress.total) * 100);
  };

  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onSuccess={handleSuccess}
        onError={handleError}
        onUploadProgress={handleUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};
export default UploadButton