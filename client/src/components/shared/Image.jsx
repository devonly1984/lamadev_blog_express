import {IKContext,IKImage} from 'imagekitio-react'
import { publicKey, urlEndpoint } from "../../constants/environment";
const Image = ({src,w,h,className,alt}) => {

  return (
    <IKContext urlEndpoint={urlEndpoint} publicKey={publicKey}>
      <IKImage
        loading="lazy"
        width={w}
        height={h}
        path={src}
        className={className}
        lqip={{ active: true, quality: 20 }}
        transformation={[
          {
            height: h,
            width: w,
          },
        ]}
        alt={alt}
      ></IKImage>
    </IKContext>
  );
}
export default Image;