import { useState, useEffect } from "react";
import { useParams } from "react-router"

export default function Detail() {
  const { id } = useParams()

  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function beforeMount() {
      try {
        let prod = await fetch(`http://localhost:3000/products/${id}?_embed=images&_expand=category`)
        if (!prod.ok) throw new Error('error request bro')
        prod = await prod.json(); setDetail(prod);
      } catch (error) {
        console.log(error);
      }
    }; beforeMount()
  }, []);

  return (
    <div className="pt-10" >

      <p>This is detail page</p>
      <p>
        {detail.name}
      </p>
    </div>
  )
}