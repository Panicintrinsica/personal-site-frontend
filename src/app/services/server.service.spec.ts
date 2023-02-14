import {ServerService} from "./server.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {testArticles, testEducation, testProfile, testProjects, testSkills} from "../testData";

describe('ServerService', () => {
  let serverService: ServerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerService]
    })

    serverService = TestBed.inject(ServerService)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should get articles', () => {
    serverService.getArticles().subscribe(articles => {
      expect(articles.length).withContext('Unexpected number of results').toBe(3);
    })
    const req = httpTestingController.expectOne('http://localhost:5250/articles')
    expect(req.request.method).toEqual("GET");

    req.flush(testArticles)
  });


  it('should get educational history', () => {
    serverService.getEducation().subscribe(result => {
      expect(result.length).withContext('Unexpected number of results').toBe(1);
    })
    const req = httpTestingController.expectOne('http://localhost:5250/education')
    expect(req.request.method).toEqual("GET");

    req.flush(testEducation)
  });

  it('should get profile data', () => {
    serverService.getProfile().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.name).withContext('Unexpected value for name').toBe('Emrys Corbin');
    })
    const req = httpTestingController.expectOne('http://localhost:5250/profile')
    expect(req.request.method).toEqual("GET");

    req.flush(testProfile)
  });

  it('should get skills by their names', () => {
    serverService.getSkillsByName().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.length).withContext('Unexpected number of skills').toBe(4);
    })
    const req = httpTestingController.expectOne('http://localhost:5250/skills')
    expect(req.request.method).toEqual("GET");

    req.flush(testSkills)
  });

  it('should get skills by their levels', () => {
    serverService.getSkillsByLevel().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.length).withContext('Unexpected number of skills').toBe(4);
    })
    const req = httpTestingController.expectOne('http://localhost:5250/skills/byLevel')
    expect(req.request.method).toEqual("GET");

    req.flush(testSkills)
  });

  it('should get project history', () => {
    serverService.getProjects().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result[1].name).withContext('Unexpected project name').toBe('Project 2');
      expect(result.length).withContext('Unexpected number of results').toBe(3);
    })
    const req = httpTestingController.expectOne('http://localhost:5250/projects')
    expect(req.request.method).toEqual("GET");

    req.flush(testProjects)
  });
})
