import { ISettingsConfig } from "@/utils/interface"
import React from "react"
import { Button, Input, Paragraph } from "../atoms"
import ApiResponse from "@/containers/ApiResponseContainer"

const SalaryArea = ({ config }: ISettingsConfig) => {
	return (
		<>
			<Paragraph size="lg" color="gray">
				Defina ou visualize o valor do seu salario:
			</Paragraph>

			{!config.activeEdit ? (
				<div className="flex space-x-5 mt-2 items-center">
					<div className="flex space-x-2">
						<Paragraph color="black">Valor:</Paragraph>
						<Paragraph color="black">
							{Number(config.salaryValue).toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</Paragraph>
					</div>
					<Button size="sm" color="green" onClick={() => config.handleEdit()}>
						Editar
					</Button>
				</div>
			) : (
				<div className="flex space-x-5 mt-2 items-center">
					<Input
						typeinput="input"
						size="xs"
						type="number"
						placeholder="Valor:"
						value={config.salaryValue}
						onChange={(event: { target: { value: string } }) =>
							config.handleSalary(event.target.value)
						}
					/>

					<Button
						size="base"
						disabled={!config.showSaveSalaryButton}
						className={
							config.showSaveSalaryButton ? "bg-light_green" : "bg-medium_gray"
						}
						onClick={() => config.saveSalary()}>
						Salvar
					</Button>

					<Button size="base" color="green" onClick={() => config.handleEdit()}>
						Voltar
					</Button>
				</div>
			)}

			<div className="mt-2">
				<ApiResponse
					config={{
						statusCode: config.salaryStatusCode,
						response: config.apiResponse.response,
					}}
				/>
			</div>
		</>
	)
}

export default SalaryArea