
export const CAP_NHAP_EMAIL = "CAP_NHAP_EMAIL";
export const CAP_NHAP_ID = "CAP_NHAP_ID ";
const initialState = {
    email:'',
    score:0,
    address:"",
    id:""
}

export default function actionForReducer(state = initialState,payload){
    switch(payload.type){
        //payload cập nhập lại dữ liệu mới
        case CAP_NHAP_EMAIL:
            return{
                ...state,
                email:payload.email
            }

        case CAP_NHAP_ID:
            return{
                ...state,
                id:payload.id
            }
        //nếu nó không nằm trong 2 trường hợp trên thì nó sẽ trả về giá trị ban đầu
        default :
            return state;
    }
}