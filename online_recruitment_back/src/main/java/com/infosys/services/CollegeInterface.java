package com.infosys.services;

import com.infosys.entities.College;
import java.util.List;

public interface CollegeInterface {
    public College addCollege(College college);

    public College getCollegeById(int id);
    public List<College> getAllColleges();
    public College updateCollege(int id, College college);
    public void deleteCollegeById(int id);
}
