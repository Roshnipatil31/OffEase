import JWT from  'jsonwebtoken'


//genrate Jwt tokeen for id email and accType


export const generateToken = ( email, id, role,department )=>{

   
   return JWT.sign({ email, id, role,department },process.env.JWT_SECRET,{expiresIn:'30d'},
      console.log(id)
   );

}
export const cookieToken  = (res,token)=>{
   res.cookie('JWT',token, {
      httpOnly: true, // Prevent client-side JavaScript access
     
      maxAge: 3600000, // 1 hour (match token expiration)
       sameSite: 'strict', // Optional: restrict cookie to same-site requests
    })
 }