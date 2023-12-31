import React from "react"
import { Container, H1, Paragraph, Input, Button, Wrapper } from "../atoms"
import { IRegisterConfig } from "../../utils/interface"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useAsync, useValidation } from "@/hooks"

const RegisterArea = ({ config }: IRegisterConfig) => {
	const { apiResponse } = useAsync()
	const { handleFieldChange } = useValidation()

	return (
		<Container type="login">
			<Wrapper type="userInput">
				<div className="text-center">
					<H1 className="!text-dark_green"> Cadastre-se </H1>

					<Paragraph className="!text-medium_gray">
						Preencha os campos e crie sua conta
					</Paragraph>
				</div>

				<Wrapper type="input">
					<Input
						typeinput="input"
						type="text"
						placeholder="Nome:"
						size="xl"
						value={config.formData.name}
						onChange={(event: { target: { value: string } }) =>
							handleFieldChange(
								"name",
								event.target.value.trim(),
								config.setFormData,
							)
						}
					/>

					<Input
						typeinput="input"
						type="email"
						placeholder="Email:"
						size="xl"
						value={config.formData.email}
						onChange={(event: { target: { value: string } }) =>
							handleFieldChange(
								"email",
								event.target.value.trim(),
								config.setFormData,
							)
						}
					/>

					<div className="w-full relative ml-2">
						<Input
							typeinput="input"
							type="email"
							placeholder="Repetir Email:"
							size="xl"
							value={config.formData.email2}
							onChange={(event: { target: { value: string } }) =>
								handleFieldChange(
									"email2",
									event.target.value.trim(),
									config.setFormData,
								)
							}
						/>
					</div>

					<ApiResponse config={apiResponse} />

					<Button
						size="xl"
						onClick={() => config.createUsers()}
						disabled={!config.showButton}
						className={config.showButton ? "bg-light_green" : "bg-medium_gray"}>
						Cadastrar
					</Button>
				</Wrapper>

				<div className="-mt-8">
					<button
						className="font-bold text-light_green"
						onClick={() => config.closeRegisterArea()}>
						Voltar
					</button>
				</div>
			</Wrapper>
		</Container>
	)
}

export default RegisterArea
