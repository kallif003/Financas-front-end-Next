import React from "react"
import { Paragraph, Wrapper } from "../atoms"
import Icon from "@mdi/react"
import { mdiChevronDown, mdiChevronUp, mdiPencilBoxOutline } from "@mdi/js"
import { useRelease } from "@/hooks"
import { IReleaseTableConfig } from "@/utils/interface"
import { Dropdown } from "antd"

const ReleaseTable = ({ config }: IReleaseTableConfig) => {
	const { content } = useRelease()

	return (
		<div className="sm:hidden md:hidden">
			{content.map((r, index) => (
				<>
					<Wrapper
						key={index}
						type="releaseContent"
						className={index % 2 == 0 ? "bg-white_one" : "bg-transparent"}>
						<Paragraph
							color="gray"
							className={config.setColorReleaseTable(index)}>
							{r.category}
						</Paragraph>

						<Paragraph
							color="gray"
							className={config.setColorReleaseTable(index)}>
							{config.formatValue(r.destinedValue)}
						</Paragraph>

						<Paragraph
							color="gray"
							className={config.setColorReleaseTable(index)}>
							{config.formatValue(r.total)}
						</Paragraph>

						<Paragraph
							color="gray"
							className={config.setColorReleaseTable(index)}>
							{config.formatValue(r.leftover)}
						</Paragraph>

						<button
							onClick={() => config.showReleasesTable(index)}
							className={config.setColorReleaseTable(index)}>
							<Icon
								path={
									config.releaseIndex != index ? mdiChevronDown : mdiChevronUp
								}
								size={1}
							/>
						</button>
					</Wrapper>

					<hr
						className={
							config.releaseIndex != index && config.isOpen
								? " border-[0.01rem] w-full border-medium_gray opacity-50"
								: "hidden"
						}
					/>

					{config.isOpen && config.releaseIndex == index && (
						<div className={config.setBackgroundColor(index)}>
							<div className="overflow-y-auto xl:overflow-hidden">
								<Wrapper type="headersReleasesTable">
									{config.headerReleasesTable.map((items, index) => (
										<Paragraph key={index} color="light_green">
											{items}
										</Paragraph>
									))}
								</Wrapper>

								{r.release.map((releases, index) => (
									<Wrapper type="contentReleaseTable" key={index}>
										<Paragraph color="gray">{releases.name}</Paragraph>

										<Paragraph color="gray">
											{config.formatValue(releases.value)}
										</Paragraph>

										<Paragraph color="gray">
											{config.parseDate(releases.date)}
										</Paragraph>

										<Paragraph color="gray">{releases.locale}</Paragraph>

										<Dropdown
											menu={{
												items: config.menu(
													releases.idRelease,
													r.category,
													r._id,
												),
											}}
											placement="bottom"
											arrow>
											<button>
												<Icon path={mdiPencilBoxOutline} size={1} />
											</button>
										</Dropdown>
									</Wrapper>
								))}
							</div>

							<hr className="border-[0.01rem] w-full border-medium_gray mt-3 opacity-50" />
						</div>
					)}
				</>
			))}

			{content.length == 0 && (
				<Paragraph color="gray" className="text-center mt-44">
					Não há dados para essa busca no momento
				</Paragraph>
			)}
		</div>
	)
}

export default ReleaseTable
