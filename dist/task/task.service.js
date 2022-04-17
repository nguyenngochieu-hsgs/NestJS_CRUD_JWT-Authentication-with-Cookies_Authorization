"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const user_entity_1 = require("./../user/user.entity");
const task_entity_1 = require("./task.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TaskService = class TaskService {
    constructor(taskRepository, userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }
    async getAllTasks(userId) {
        const tasks = await this.taskRepository.find({ where: { user: userId } });
        return tasks;
    }
    async getTaskById(userId, taskId) {
        const task = await this.taskRepository.findOne({ where: { id: taskId, user: userId } });
        if (task) {
            return task;
        }
        return null;
    }
    async createTask(userId, createTaskDto) {
        let newTask = new task_entity_1.TaskEntity();
        newTask.title = createTaskDto.title;
        newTask.description = createTaskDto.description;
        newTask = await this.taskRepository.save(newTask);
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['tasks'] });
        user.tasks.push(newTask);
        await this.userRepository.save(user);
        return newTask;
    }
    async updateTask(userId, taskId, updateTaskDto) {
        await this.taskRepository.update({ id: taskId }, updateTaskDto);
        const updateTask = await this.taskRepository.findOne({ where: { id: taskId, user: userId } });
        if (!updateTask) {
            return null;
        }
        return updateTask;
    }
    async deleteTask(userId, taskId) {
        const task = await this.taskRepository.findOne({ where: { id: taskId, user: userId } });
        if (!task) {
            return null;
        }
        const deleteResult = await this.taskRepository.remove(task);
        return deleteResult;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.TaskEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map