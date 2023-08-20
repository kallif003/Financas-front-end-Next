import { w, W } from "windstitch"

export const Wrapper = w.div("", {
	variants: {
		type: {
			modal: `
                w-full
                h-full
                absolute
                top-[50%]
                left-[50%]
                flex 
                flex-col
                items-center 
                justify-center
                modalContainer
            `,
			menuIcon: `
				flex 
				flex-col 
				space-y-5 
				items-center 
				h-[8rem] 
				mt-5
					
			`,
			logout: `
                h-28 
                flex 
                justify-center 
                items-center
        
            `,
			userInput: `
                w-[35%]
                h-[35rem]
                left-24
                absolute
                rounded-lg
                ml-10 flex
                flex-col
                justify-evenly
                items-center
                glass-effect
                sm:z-10
                userInput
            `,
			input: `
                flex
                flex-col
                justify-evenly
                items-center
                h-[20rem]
                mt-[-2rem] 
                relative
            `,
			categoryFilter: `
                flex 
                justify-between 
                items-center 
                w-full 
                mb-5
            `,
			dataTable: `
                w-[100%]
                min-h-[35rem]
                pt-12
                mb-8
                medium_gray
                glass-effect
                rounded-lg
                pb-2
            `,
			categoryContent: `
                grid
                grid-cols-[48%_49%_5%]
                h-12
                px-9
                w-full
                items-center
                font-[700]
                text-black
            `,
			headers: `
                flex
                bg-light_green
                h-12
                px-8
                w-full
                items-center
                justify-between
                rounded-tl-lg
                rounded-tr-lg
                fixed
                z-10
                top-0
            `,
			actionsModal: `
                bg-white 
                flex 
                flex-col 
                py-5
                px-5
                min-h-[15rem] 
                w-[40rem] 
                text-black 
                rounded-md
            `,
			releaseContent: `
                grid
                grid-cols-[33%_34%_31.5%_5%]
                h-12
                px-9
                w-full
                items-center
                font-[700]
                text-black
            `,
		},
	},
})

export type WrapperProps = W.Infer<typeof Wrapper>