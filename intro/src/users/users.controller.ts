import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {
	private users: UserDTO[] = [];

	@Get()
	getUsers(): UserDTO[] {
		return this.users;
	}

	@Post()
	createUser(@Body() user: UserDTO) {
		console.log(user);
		this.users.push(user);
		return user;
	}

	@Get(':id')
	getUserById(@Param('id') id: number) {
		if (this.users.length > id) {
			return this.users[id];
		} else {
			throw new NotFoundException('The user with id: ' + id + ' is not found');
		}
	}
}
