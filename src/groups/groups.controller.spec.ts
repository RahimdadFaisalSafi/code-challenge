import { Test, TestingModule } from "@nestjs/testing"
import { GroupsController } from "./groups.controller"
import { GroupsService } from "./groups.service"

describe("Groupscontroller", () => {
	let controller: GroupsController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [GroupsController],
			providers: [GroupsService],
		}).compile()

		controller = module.get<GroupsController>(GroupsController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
