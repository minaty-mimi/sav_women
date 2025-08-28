import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Check, ArrowRight, Settings, BarChart3, Quote } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  time: string;
  category: string;
  completed: boolean;
  delegated: boolean;
  createdAt: Date;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: '', time: '', category: 'Personal' });
  const [showSettings, setShowSettings] = useState(false);

  const categories = ['Personal', 'Work', 'Health', 'Learning', 'Community'];
  
  const motivationalQuotes = [
    "Every accomplishment starts with the decision to try.",
    "You are capable of amazing things.",
    "Progress, not perfection.",
    "Your potential is endless.",
    "Believe in yourself and all that you are."
  ];

  const todayQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  const addTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        time: newTask.time,
        category: newTask.category,
        completed: false,
        delegated: false,
        createdAt: new Date()
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', time: '', category: 'Personal' });
    }
  };

  const completeTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  const delegateTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, delegated: true } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const todayTasks = tasks.filter(task => {
    const today = new Date().toDateString();
    return task.createdAt.toDateString() === today;
  });

  const completedTasks = todayTasks.filter(task => task.completed).length;
  const delegatedTasks = todayTasks.filter(task => task.delegated).length;
  const totalTasks = todayTasks.length;

  const getCategoryColor = (category: string) => {
    const colors = {
      Personal: 'bg-green-100 text-green-800',
      Work: 'bg-blue-100 text-blue-800',
      Health: 'bg-green-100 text-green-800',
      Learning: 'bg-orange-100 text-orange-800',
      Community: 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Daily <span className="text-green-800">Productivity</span> Tool
            </h1>
            <p className="text-lg text-gray-600">
              Organize your day, track your progress, and celebrate your achievements.
            </p>
          </div>

          {/* Daily Quote */}
          <Card className="mb-8 bg-gradient-to-r from-green-100 to-yellow-100 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-3">
                <Quote className="h-6 w-6 text-green-800" />
                <p className="text-lg font-medium text-gray-800 text-center italic">
                  "{todayQuote}"
                </p>
                <Quote className="h-6 w-6 text-green-800 rotate-180" />
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Task Input */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="mr-2 h-5 w-5" />
                    Add New Task
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      placeholder="What do you want to accomplish?"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="time"
                        value={newTask.time}
                        onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                      />
                      <select
                        value={newTask.category}
                        onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <Button onClick={addTask} className="w-full bg-green-800 hover:bg-green-900">
                      Add Task
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Today's Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Today's Tasks ({todayTasks.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {todayTasks.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      No tasks for today. Add one above to get started!
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {todayTasks.map((task) => (
                        <div
                          key={task.id}
                          className={`p-4 border rounded-lg transition-all ${
                            task.completed 
                              ? 'bg-green-50 border-green-200' 
                              : task.delegated 
                              ? 'bg-yellow-50 border-yellow-200' 
                              : 'bg-white border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className={`font-medium ${
                                  task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                                }`}>
                                  {task.title}
                                </h3>
                                <Badge className={getCategoryColor(task.category)}>
                                  {task.category}
                                </Badge>
                              </div>
                              {task.time && (
                                <p className="text-sm text-gray-600">⏰ {task.time}</p>
                              )}
                            </div>
                            
                            {!task.completed && !task.delegated && (
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  onClick={() => completeTask(task.id)}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => delegateTask(task.id)}
                                >
                                  <ArrowRight className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                            
                            {task.completed && (
                              <Badge className="bg-green-100 text-green-800">Completed</Badge>
                            )}
                            
                            {task.delegated && (
                              <Badge className="bg-yellow-100 text-yellow-800">Tomorrow</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Progress Analytics */}
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Today's Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completed</span>
                        <span>{completedTasks}/{totalTasks}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all"
                          style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{delegatedTasks}</div>
                        <div className="text-sm text-gray-600">Tomorrow</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>• Set specific times for better focus</p>
                    <p>• Use categories to organize your day</p>
                    <p>• Delegate tasks to tomorrow when needed</p>
                    <p>• Celebrate completed tasks!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TodoApp;