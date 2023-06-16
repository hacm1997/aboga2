import http from "./http-common";
import { PostData } from "./type";

const postForm  = (data: PostData) => {
    return http.post<PostData>("/api/v2/lead", data);
}

const Services = {
    postForm,
}
  
export default Services;