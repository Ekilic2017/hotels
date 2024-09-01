import Container from "../../Components/Container"
import {Formik,Field,Form} from "formik"
import { initial, inputs } from "../../Contants"
import { PlaceData } from "../../types"
import { useMutation } from "@tanstack/react-query"
import { createPlace } from "../../api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
const Create = () => {
  const navigate=useNavigate();
  const {isPending, mutate}=useMutation({
    mutationFn:(body:PlaceData)=>createPlace(body),
    onSuccess:()=>{
      toast.success("Konaklama noktası oluşturuldu")
      navigate("/")
    },
    onError:()=>{
      toast.error("İşlem Başarısız")
    }
  })
  const handleSubmit=(values:PlaceData)=>{
    //kopyasını oluştur
    const body={...values};
    //özellikleri diziye çevir
   body.amenities= (values.amenities  as string).split(",");
  //apiye istek at
mutate(body)
  }
  return (
<Container>
  <Formik initialValues={initial} onSubmit={handleSubmit} >
  <Form className="max-w-2xl mx-auto grid grid-cols-1 gap-5">
    {inputs.map((item,key)=>
    <div  className="flex flex-col gap-3 "key={key}>
    <label className="font-bold">{item.label}</label>
     <Field  
     type={item.type || "text" }
      name={item.name}
       placeholder={item.label}
       className="border py-1 px-3 roundedmd shadow w-full"
     />
     </div>
    )}
    <button disabled={isPending}
    className="my-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md
    transition hover:bg-blue-600 disabled:bg-blue-200"
 type="submit">Gönder</button>
    </Form>
  </Formik>
</Container>
  )
}

export default Create