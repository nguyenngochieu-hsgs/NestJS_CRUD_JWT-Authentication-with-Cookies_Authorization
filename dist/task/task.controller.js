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
exports.TaskController = void 0;
const create_task_dto_1 = require("./dto/create-task.dto");
const jwt_guard_1 = require("./../auth/jwt.guard");
const task_service_1 = require("./task.service");
const common_1 = require("@nestjs/common");
const update_task_dto_1 = require("./dto/update-task.dto");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async create(createTaskDto, req, res) {
        const newTask = await this.taskService.createTask(req.user.id, createTaskDto);
        if (newTask) {
            return res.status(common_1.HttpStatus.CREATED).json({
                message: 'Task is created',
                successs: true
            });
        }
        return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Task is not created, please try again',
            success: false
        });
    }
    async getAll(req, res) {
        const tasks = await this.taskService.getAllTasks(req.user.id);
        if (tasks) {
            console.log(tasks);
            return res.status(common_1.HttpStatus.CREATED).json({
                message: 'Task is created',
                tasks: tasks,
                successs: true
            });
        }
        return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Task is not created, please try again',
            success: false
        });
    }
    async getOne(taskId, res, req) {
        const task = await this.taskService.getTaskById(req.user.id, parseInt(taskId));
        if (task) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Get task successfully',
                task: task,
                success: true
            });
        }
        throw new common_1.HttpException('TaskID is not found or your user does not have this taskID', common_1.HttpStatus.BAD_REQUEST);
    }
    async updateOne(updateTaskDto, taskId, res, req) {
        const task = await this.taskService.updateTask(req.user.id, parseInt(taskId), updateTaskDto);
        if (task) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Delete task successfully',
                task: task,
                success: true
            });
        }
        throw new common_1.HttpException('TaskID is not found or your user does not have this taskID', common_1.HttpStatus.BAD_REQUEST);
    }
    async deleteOne(taskId, res, req) {
        const task = await this.taskService.deleteTask(req.user.id, parseInt(taskId));
        if (task) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Delete task successfully',
                task: task,
                success: true
            });
        }
        throw new common_1.HttpException('TaskID is not found or your user does not have this taskID', common_1.HttpStatus.BAD_REQUEST);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_task_dto_1.UpdateTaskDto, String, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteOne", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map