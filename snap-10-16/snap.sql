drop table if exists Task;

create table Task(
   taskId binary(20) not null,
	taskDescription varchar(256),
	taskDueDate datetime,
	taskPriority varchar(64) not null,
	taskStartDate datetime,
	taskStatus varchar(64) not null,
	tastTitle varchar(255) not null,
	primary key(taskId)
)