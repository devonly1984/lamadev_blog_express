import {IKContext,IKUpload} from 'imagekitio-react'
import { publicKey, urlEndpoint } from '../../constants/environment'
import { authenticator } from '../../lib/imagekit';
import {toast} from 'react-toastify'
import { useRef } from 'react';



const UploadButton = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);
  const onSuccess = (res) => {
    setData(res);
    toast.success("File uploaded Successfully");
  };
  const onError = (err) => {
    console.log(err);
    toast.error("Image upload failed!");
  };
  const handleUploadProgress = (progress) => {

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
        onSuccess={onSuccess}
        onError={onError}
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