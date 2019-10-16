drop table if exists Task;

create table Task(
   taskId binary(16) not null,
	taskDueDate datetime,
	taskDescription varchar(256),
	taskPriority varchar(64) not null,
	taskStartDate datetime,
	taskStatus varchar(64) not null,
	tastTitle varchar(255) not null,
	primary key(taskId)
)