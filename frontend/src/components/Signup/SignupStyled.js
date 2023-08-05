import { styled } from "styled-components";

export const ContainerSignup = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;

	.signup_form_container {
	width: 900px;
	height: 500px;
	display: flex;
	border-radius: 10px;
	box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
}

	.left {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* background-color: #3bb19b; */
	background-color: red;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}

	.left h1 {
	margin-top: 0;
	color: white;
	font-size: 35px;
	align-self: center;
}

	.right {
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}

	.form_container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

	.form_container h1 {
	font-size: 40px;
	margin-top: 0;
}

	.input {
	outline: none;
	border: none;
	width: 370px;
	padding: 15px;
	border-radius: 10px;
	background-color: #edf5f3;
	margin: 5px 0;
	font-size: 14px;
}

	.error_msg {
	width: 370px;
	padding: 15px;
	margin: 5px 0;
	font-size: 14px;
	background-color: #f34646;
	color: white;
	border-radius: 5px;
	text-align: center;
}

	.white_btn,
	.green_btn {
	border: none;
	outline: none;
	padding: 12px 0;
	background-color: white;
	border-radius: 20px;
	width: 180px;
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
}

	.green_btn {
	/* background-color: #3bb19b; */
	background-color: red;
	color: white;
	margin: 10px;
}

	.avatar-label{
	//block text-sm font-medium text-gray-700 
	display: block;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: rgb(55 65 81);
}

	.avatar-container{
	//mt-2 flex items-center 
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
}

	.avatar-span{
	//inline-block h-8 w-8 rounded-full overflow-hidden 
	display: inline-block;
	height: 2rem;
	width: 2rem;
	border-radius: 9999px;
	overflow: hidden;
}

	.avatar-img{
	//h-full w-full object-cover rounded-full
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 9999px;
}

	.avatar-icon{
	height: 2rem;
	width: 2rem;
}

	.label-file{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 1.25rem;
	margin-right: 1.25rem;
	padding: 1rem 0.5rem;
	border-width: 1px;
	border-color: rgb(209 213 219);
	border-radius: 0.375rem;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	background-color: #fff;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: rgb(55 65 81);

}

	.label-file:hover{
	background-color: rgb(249 250 251);
}
	.sr-only{
		display:none;
	}
`;


