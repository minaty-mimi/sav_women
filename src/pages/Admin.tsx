import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Download, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Heart,
  TrendingUp,
  BarChart3
} from 'lucide-react';

interface EnrolledWoman {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  location: string;
  education: string;
  occupation: string;
  enrollmentDate: string;
  status: 'active' | 'inactive' | 'pending';
  program: string;
  mentor: string;
  lastActivity: string;
  notes: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [programFilter, setProgramFilter] = useState<string>('all');
  const [selectedWoman, setSelectedWoman] = useState<EnrolledWoman | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<EnrolledWoman>>({});

  // Mock data - replace with actual API calls
  const [enrolledWomen, setEnrolledWomen] = useState<EnrolledWoman[]>([
    {
      id: '1',
      firstName: 'Amara',
      lastName: 'Johnson',
      email: 'amara.johnson@email.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '2000-03-15',
      location: 'New York, NY',
      education: 'Bachelor\'s in Business',
      occupation: 'Entrepreneur',
      enrollmentDate: '2023-01-15',
      status: 'active',
      program: 'Leadership Development',
      mentor: 'Sarah Williams',
      lastActivity: '2024-01-20',
      notes: 'Excellent leadership potential, started her own business at 19.'
    },
    {
      id: '2',
      firstName: 'Zara',
      lastName: 'Okafor',
      email: 'zara.okafor@email.com',
      phone: '+1 (555) 234-5678',
      dateOfBirth: '1999-07-22',
      location: 'San Francisco, CA',
      education: 'Master\'s in Computer Science',
      occupation: 'Software Engineer',
      enrollmentDate: '2023-02-20',
      status: 'active',
      program: 'Tech Leadership',
      mentor: 'Maria Rodriguez',
      lastActivity: '2024-01-18',
      notes: 'Strong technical skills, interested in AI and machine learning.'
    },
    {
      id: '3',
      firstName: 'Maya',
      lastName: 'Patel',
      email: 'maya.patel@email.com',
      phone: '+1 (555) 345-6789',
      dateOfBirth: '2001-11-08',
      location: 'Chicago, IL',
      education: 'High School Graduate',
      occupation: 'Community Organizer',
      enrollmentDate: '2023-03-10',
      status: 'active',
      program: 'Community Leadership',
      mentor: 'Lisa Chen',
      lastActivity: '2024-01-19',
      notes: 'Natural community leader, organized successful local initiatives.'
    },
    {
      id: '4',
      firstName: 'Fatima',
      lastName: 'Ahmed',
      email: 'fatima.ahmed@email.com',
      phone: '+1 (555) 456-7890',
      dateOfBirth: '1998-05-12',
      location: 'Houston, TX',
      education: 'Bachelor\'s in Psychology',
      occupation: 'Counselor',
      enrollmentDate: '2023-04-05',
      status: 'pending',
      program: 'Mental Health Advocacy',
      mentor: 'Dr. Jennifer Brown',
      lastActivity: '2024-01-15',
      notes: 'Compassionate counselor, working with underserved communities.'
    },
    {
      id: '5',
      firstName: 'Isabella',
      lastName: 'Garcia',
      email: 'isabella.garcia@email.com',
      phone: '+1 (555) 567-8901',
      dateOfBirth: '2002-09-30',
      location: 'Miami, FL',
      education: 'Associate\'s Degree',
      occupation: 'Student',
      enrollmentDate: '2023-05-20',
      status: 'inactive',
      program: 'Academic Support',
      mentor: 'Dr. Emily Davis',
      lastActivity: '2023-12-10',
      notes: 'Taking a break due to academic workload, plans to return.'
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - replace with proper authentication
    if (password === 'SAVWOMAN2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setSelectedWoman(null);
    setIsEditing(false);
  };

  const filteredWomen = enrolledWomen.filter(woman => {
    const matchesSearch = 
      woman.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      woman.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      woman.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      woman.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || woman.status === statusFilter;
    const matchesProgram = programFilter === 'all' || woman.program === programFilter;
    
    return matchesSearch && matchesStatus && matchesProgram;
  });

  const handleEdit = (woman: EnrolledWoman) => {
    setSelectedWoman(woman);
    setEditData(woman);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (selectedWoman && editData) {
      setEnrolledWomen(prev => 
        prev.map(w => w.id === selectedWoman.id ? { ...w, ...editData } : w)
      );
      setIsEditing(false);
      setSelectedWoman(null);
      setEditData({});
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this member? This action cannot be undone.')) {
      setEnrolledWomen(prev => prev.filter(w => w.id !== id));
      if (selectedWoman?.id === id) {
        setSelectedWoman(null);
        setIsEditing(false);
      }
    }
  };

  const exportData = () => {
    const csvContent = [
      ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Location', 'Status', 'Program', 'Enrollment Date'],
      ...filteredWomen.map(w => [
        w.id, w.firstName, w.lastName, w.email, w.phone, w.location, w.status, w.program, w.enrollmentDate
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sav-women-enrollment-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const stats = {
    total: enrolledWomen.length,
    active: enrolledWomen.filter(w => w.status === 'active').length,
    pending: enrolledWomen.filter(w => w.status === 'pending').length,
    inactive: enrolledWomen.filter(w => w.status === 'inactive').length
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-800">Admin Access</CardTitle>
            <p className="text-gray-600">Enter password to access admin panel</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-center text-lg"
              />
              <Button type="submit" className="w-full bg-green-800 hover:bg-green-900">
                Access Admin Panel
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
                              <p className="text-gray-600">Manage SAV WOMEN organization data</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Members</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                  </div>
                  <Users className="h-8 w-8 text-green-800" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active</p>
                    <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Inactive</p>
                    <p className="text-2xl font-bold text-gray-600">{stats.inactive}</p>
                  </div>
                  <Heart className="h-8 w-8 text-gray-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search by name, email, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
                
                <select
                  value={programFilter}
                  onChange={(e) => setProgramFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All Programs</option>
                  <option value="Leadership Development">Leadership Development</option>
                  <option value="Tech Leadership">Tech Leadership</option>
                  <option value="Community Leadership">Community Leadership</option>
                  <option value="Mental Health Advocacy">Mental Health Advocacy</option>
                  <option value="Academic Support">Academic Support</option>
                </select>
                
                <Button onClick={exportData} variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Members Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enrolled Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Contact</th>
                      <th className="text-left py-3 px-4 font-semibold">Program</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Enrolled</th>
                      <th className="text-left py-3 px-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWomen.map((woman) => (
                      <tr key={woman.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">{woman.firstName} {woman.lastName}</div>
                            <div className="text-sm text-gray-500">{woman.location}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-sm">
                            <div>{woman.email}</div>
                            <div className="text-gray-500">{woman.phone}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-sm">
                            <div>{woman.program}</div>
                            <div className="text-gray-500">Mentor: {woman.mentor}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge 
                            variant={woman.status === 'active' ? 'default' : woman.status === 'pending' ? 'secondary' : 'outline'}
                            className={
                              woman.status === 'active' ? 'bg-green-100 text-green-800' :
                              woman.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }
                          >
                            {woman.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-500">
                          {new Date(woman.enrollmentDate).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedWoman(woman)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(woman)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(woman.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Member Details Modal */}
          {selectedWoman && (
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Member Details: {selectedWoman.firstName} {selectedWoman.lastName}</CardTitle>
                  <Button variant="outline" onClick={() => setSelectedWoman(null)}>Close</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-800">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Full Name:</span> {selectedWoman.firstName} {selectedWoman.lastName}</div>
                      <div><span className="font-medium">Email:</span> {selectedWoman.email}</div>
                      <div><span className="font-medium">Phone:</span> {selectedWoman.phone}</div>
                      <div><span className="font-medium">Date of Birth:</span> {new Date(selectedWoman.dateOfBirth).toLocaleDateString()}</div>
                      <div><span className="font-medium">Location:</span> {selectedWoman.location}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-green-800">Program Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Education:</span> {selectedWoman.education}</div>
                      <div><span className="font-medium">Occupation:</span> {selectedWoman.occupation}</div>
                      <div><span className="font-medium">Program:</span> {selectedWoman.program}</div>
                      <div><span className="font-medium">Mentor:</span> {selectedWoman.mentor}</div>
                      <div><span className="font-medium">Status:</span> 
                        <Badge className="ml-2 bg-green-100 text-green-800">{selectedWoman.status}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3 text-green-800">Notes</h4>
                    <p className="text-sm text-gray-600">{selectedWoman.notes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Edit Member Modal */}
          {isEditing && selectedWoman && (
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Edit Member: {selectedWoman.firstName} {selectedWoman.lastName}</CardTitle>
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="bg-green-800 hover:bg-green-900">Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      value={editData.firstName || ''}
                      onChange={(e) => setEditData({...editData, firstName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      value={editData.lastName || ''}
                      onChange={(e) => setEditData({...editData, lastName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={editData.email || ''}
                      onChange={(e) => setEditData({...editData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={editData.phone || ''}
                      onChange={(e) => setEditData({...editData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Status</label>
                    <select
                      value={editData.status || ''}
                      onChange={(e) => setEditData({...editData, status: e.target.value as any})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Program</label>
                    <select
                      value={editData.program || ''}
                      onChange={(e) => setEditData({...editData, program: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="Leadership Development">Leadership Development</option>
                      <option value="Tech Leadership">Tech Leadership</option>
                      <option value="Community Leadership">Community Leadership</option>
                      <option value="Mental Health Advocacy">Mental Health Advocacy</option>
                      <option value="Academic Support">Academic Support</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Notes</label>
                    <textarea
                      value={editData.notes || ''}
                      onChange={(e) => setEditData({...editData, notes: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
