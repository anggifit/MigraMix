import { useForm } from 'react-hook-form';

function TestFormTest() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="username" {...register("username", {required: true, maxLength: 25})} />
      <input type="text" placeholder="name" {...register("name", {})} />
      <input type="text" placeholder="lastname" {...register("lastname", {})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, min: 8, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Password" {...register("Password", {required: true, maxLength: 24})} />
      <input type="text" placeholder="Bio" {...register("Bio", { maxLength: 350})} />
      <input type="text" placeholder="Instagram" {...register("Instagram", {min: 3})} />
      <input type="text" placeholder="Facebook" {...register("Facebook", {})} />
      <input type="text" placeholder="Twitter" {...register("Twitter", {})} />
      <input type="text" placeholder="TikTok" {...register("TikTok", {})} />
      <input type="text" placeholder="Soundcloud" {...register("Soundcloud", {})} />
      <input type="text" placeholder="Mixcloud" {...register("Mixcloud", {})} />
      <input type="text" placeholder="Youtube" {...register("Youtube", {})} />
      <input type="url" placeholder="Photo" {...register} />
      <input type="submit" />
    </form>
  );
}
export default TestFormTest;