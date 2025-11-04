import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectDataContext } from '../../../../../../Context/ProjectDataProvider';

export default function DepartmentInfo() {
  const { data, isLoading, error } = useProjectDataContext();
  const params = useParams();
  const facultyId = params.facultyId;
  const departmentInString = params.departName;
  const departmentName = departmentInString.replace(/_/g, ' ');

  if (isLoading) return <div>جاري التحميل...</div>;
  if (error) return <div>حدث خطأ: {error.message}</div>;

  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);
  if (!faculty) return <div>Faculty not found</div>;

  const choosenDepartment = faculty.departments?.find(d => d.name === departmentName);
  if (!choosenDepartment) return <div>Department not found</div>;

  return (
    <div className='department'>

      <div className='text-center departmentName'>
        <h2>{choosenDepartment.name} Department</h2>
      </div>

      <div className='mx-5 px-5 my-4'>
        <h3 className='fw-bolder'><span className='text-success'>Head of Department</span></h3>
        <p className='text-muted lead mx-5 my-3'>{choosenDepartment.head}</p>
      </div>

      <div className='mx-5 px-5 my-5'>
        <h3 className='fw-bolder'><span className='text-success'>Description</span></h3>
        <p className='text-muted lead mx-5 my-3'>{choosenDepartment.description}</p>
      </div>

      <div className='mx-5 px-5 my-5'>
        <h3 className='fw-bolder'><span className='text-success'>Location</span></h3>
        <p className='text-muted lead mx-5 my-3'>{choosenDepartment.location}</p>
      </div>

      <div className='mx-5 px-5 my-5'>
        <h3 className='fw-bolder'><span className='text-success'>Courses</span></h3>
        <ul className='mx-5'>
          {choosenDepartment.courses?.map((course, index) => <li key={index}>{course}</li>)}
        </ul>
      </div>

      <div className='mx-5 px-5 my-5'>
        <h3 className='fw-bolder'><span className='text-success'>Labs</span></h3>
        <ul className='mx-5'>
          {choosenDepartment.labs?.map((lab, index) => <li key={index}>{lab}</li>)}
        </ul>
      </div>

      <div className='mx-5 px-5 my-5'>
        <h3 className='fw-bolder'><span className='text-success'>Projects</span></h3>
        <ul className='mx-5'>
          {choosenDepartment.projects?.map((project, index) => <li key={index}>{project}</li>)}
        </ul>
      </div>

      <div className='mx-5 px-5 my-5'>
        <h3 className='fw-bolder'><span className='text-success'>Partners</span></h3>
        <ul className='mx-5'>
          {choosenDepartment.partners?.map((partner, index) => <li key={index}>{partner}</li>)}
        </ul>
      </div>

      <div className="mx-5 px-5 my-5">
        <h3 className='fw-bolder'><span className='text-success'>Staff</span></h3>
        <table className='text-center mt-3 mx-5 p-5' border="1" style={{ borderCollapse: 'collapse', width: '50%' }}>
          <thead className='border'>
            <tr>
              <th style={{ border: '1px solid black' }}>Name</th>
              <th style={{ border: '1px solid black' }}>Title</th>
            </tr>
          </thead>
          <tbody>
            {choosenDepartment.stuff?.map((member, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', verticalAlign: 'top' }}>{member.name}</td>
                <td style={{ border: '1px solid black' }}>{member.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
